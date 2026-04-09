import { useState } from "react";

const helperText = {
  all: "新增後會同時出現在「全部」與「進行中」。",
  active: "在這裡新增的項目會直接進入「進行中」。",
  completed: "在這裡新增的項目仍會先建立為未完成狀態。",
};

export function TaskInput({ currentPage, onAddTask }) {
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const didAdd = onAddTask(value);

    if (!didAdd) {
      setShowError(true);
      return;
    }

    setValue("");
    setShowError(false);
  };

  return (
    <section className="task-input-shell">
      <div className="section-heading">
        <div>
          <p className="section-label">快速新增</p>
          <h2>建立新的待辦事項</h2>
        </div>
        <p className="helper-copy">{helperText[currentPage]}</p>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="task-title">
          待辦事項名稱
        </label>
        <input
          id="task-title"
          name="task-title"
          type="text"
          placeholder="例如：整理本週待辦、安排回覆信件"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            if (showError && event.target.value.trim()) {
              setShowError(false);
            }
          }}
        />
        <button type="submit">新增</button>
      </form>

      {showError ? (
        <p className="error-copy" role="alert">
          請先輸入待辦事項內容。
        </p>
      ) : null}
    </section>
  );
}
