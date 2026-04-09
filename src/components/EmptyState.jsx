const emptyStateContent = {
  all: {
    title: "還沒有待辦事項",
    description: "從上方輸入第一筆待辦事項，建立你的工作清單。",
  },
  active: {
    title: "目前沒有進行中的項目",
    description: "你可以新增新的待辦事項，或回到「全部」查看完整清單。",
  },
  completed: {
    title: "還沒有已完成的項目",
    description: "完成任一待辦事項後，這裡會顯示已完成清單。",
  },
};

export function EmptyState({ currentPage }) {
  const content = emptyStateContent[currentPage];

  return (
    <div className="empty-state">
      <p className="empty-state-label">Empty state</p>
      <h3>{content.title}</h3>
      <p>{content.description}</p>
    </div>
  );
}
