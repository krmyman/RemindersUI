const pageDescriptions = {
  all: "顯示所有待辦事項",
  active: "只看尚未完成的項目",
  completed: "只看已完成的項目",
};

export function PageTabs({ pages, currentPage, onChange }) {
  return (
    <div className="tabs-shell" role="tablist" aria-label="待辦頁面切換">
      {pages.map((page) => {
        const isActive = page.id === currentPage;

        return (
          <button
            key={page.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`tab-button${isActive ? " is-active" : ""}`}
            onClick={() => onChange(page.id)}
          >
            <span>{page.label}</span>
            <small>{pageDescriptions[page.id]}</small>
          </button>
        );
      })}
    </div>
  );
}
