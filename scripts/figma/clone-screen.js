// Figma use_figma 환경에서 이 파일 내용 뒤에
// return await cloneScreen(figma, DATA);
// 를 붙여 실행한다. Figma API를 실행하는 서버/브라우저 스크립트가 아니다.
async function cloneScreen(figma, data) {
  if (!data || !data.pageId || !data.templateNodeId || !data.name) {
    throw new Error("pageId, templateNodeId, name이 필요합니다.");
  }
  const page = await figma.getNodeByIdAsync(data.pageId);
  if (!page || page.type !== "PAGE") throw new Error("작업 페이지를 확인하세요.");
  await figma.setCurrentPageAsync(page);
  const template = await figma.getNodeByIdAsync(data.templateNodeId);
  const rightOf = await figma.getNodeByIdAsync(data.rightOfNodeId || data.templateNodeId);
  if (!template || template.type !== "FRAME" || !rightOf || !template.parent ||
      rightOf.parent.id !== template.parent.id) {
    throw new Error("같은 부모 안의 템플릿 화면과 배치 기준 화면이 필요합니다.");
  }
  const fonts = new Map();
  for (const t of template.findAllWithCriteria({ types: ["TEXT"] })) {
    for (const segment of t.getStyledTextSegments(["fontName"])) {
      fonts.set(JSON.stringify(segment.fontName), segment.fontName);
    }
  }
  await Promise.all([...fonts.values()].map(font => figma.loadFontAsync(font)));

  const screen = template.clone();
  template.parent.appendChild(screen);
  screen.name = data.name;
  screen.x = rightOf.x + rightOf.width + (data.canvasGap ?? 200);
  screen.y = rightOf.y;
  const body = screen.children.find(n => n.name === "## BODY");
  const descendants = screen.findAll(() => true);
  const counts = {};
  for (const n of descendants) counts[n.type] = (counts[n.type] || 0) + 1;

  return {
    createdNodeIds: [screen.id],
    root: { id: screen.id, name: screen.name, width: screen.width, height: screen.height },
    body: body ? {
      id: body.id, width: body.width,
      children: body.children.map(n => ({ id: n.id, name: n.name, width: n.width }))
    } : null,
    counts,
    fonts: [...fonts.values()],
    next: "clone-only: BODY를 기획 데이터로 구성한 뒤 필수 구조·서체 확인과 화면 캡처 검수를 수행한다."
  };
}
