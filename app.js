(function () {
  const roadmapEl = document.getElementById("roadmap");

  if (!roadmapEl || !ROADMAP) return;

  let lastFocusedElement = null;

  const modal = createResourceModal();
  document.body.appendChild(modal.overlay);

  function createResourceModal() {
    const overlay = document.createElement("div");
    overlay.className = "resource-modal";
    overlay.setAttribute("aria-hidden", "true");

    const dialog = document.createElement("div");
    dialog.className = "resource-modal__dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");

    const header = document.createElement("div");
    header.className = "resource-modal__header";

    const title = document.createElement("h2");
    title.className = "resource-modal__title";
    title.id = "resource-modal-title";
    header.appendChild(title);

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "resource-modal__close";
    closeButton.setAttribute("aria-label", "Kaynak penceresini kapat");
    closeButton.innerHTML = "&times;";
    header.appendChild(closeButton);

    const subtitle = document.createElement("p");
    subtitle.className = "resource-modal__subtitle";
    subtitle.textContent = "Faydalı kaynaklar";

    const list = document.createElement("ul");
    list.className = "resource-modal__list";

    dialog.appendChild(header);
    dialog.appendChild(subtitle);
    dialog.appendChild(list);
    overlay.appendChild(dialog);

    closeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      closeResourceModal();
    });

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeResourceModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && overlay.classList.contains("is-visible")) {
        closeResourceModal();
      }
    });

    return { overlay, dialog, title, list, closeButton };
  }

  function openResourceModal(label, resources) {
    modal.title.textContent = label;
    modal.list.innerHTML = "";

    resources.forEach((resource) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = resource.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = resource.label;
      item.appendChild(link);
      modal.list.appendChild(item);
    });

    lastFocusedElement = document.activeElement;
    modal.overlay.classList.add("is-visible");
    modal.overlay.setAttribute("aria-hidden", "false");
    modal.closeButton.focus();
  }

  function closeResourceModal() {
    modal.overlay.classList.remove("is-visible");
    modal.overlay.setAttribute("aria-hidden", "true");
    modal.list.innerHTML = "";
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }

  function normalizeItem(item) {
    if (typeof item === "string") {
      return { label: item, resources: [] };
    }

    return {
      label: item.label,
      resources: Array.isArray(item.resources) ? item.resources : [],
    };
  }

  const hero = document.createElement("section");
  hero.className = "hero";

  const heroBubble = document.createElement("div");
  heroBubble.className = "hero-bubble";
  heroBubble.textContent = ROADMAP.label;

  hero.appendChild(heroBubble);
  roadmapEl.appendChild(hero);

  const categoriesRow = document.createElement("div");
  categoriesRow.className = "category-row";

  ROADMAP.categories.forEach((category) => {
    const column = document.createElement("section");
    column.className = "category-column";

    const header = document.createElement("div");
    header.className = "category-header";

    const categoryButton = document.createElement("button");
    categoryButton.type = "button";
    categoryButton.className = "category-bubble";
    categoryButton.textContent = category.label;
    categoryButton.setAttribute("aria-expanded", "false");
    header.appendChild(categoryButton);

    const topicColumn = document.createElement("div");
    topicColumn.className = "topic-column";

    category.topics.forEach((topic) => {
      const topicGroup = document.createElement("div");
      topicGroup.className = "topic-group";

      const topicButton = document.createElement("button");
      topicButton.type = "button";
      topicButton.className = "topic-bubble";
      topicButton.textContent = topic.label;
      topicButton.setAttribute("aria-expanded", "false");

      const chipList = document.createElement("div");
      chipList.className = "chip-list";
      chipList.setAttribute("role", "list");

      topic.items.forEach((rawItem) => {
        const { label, resources } = normalizeItem(rawItem);
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "chip";
        chip.textContent = label;
        chip.setAttribute("role", "listitem");

        if (resources.length > 0) {
          chip.classList.add("chip--interactive");
          chip.addEventListener("click", (event) => {
            event.stopPropagation();
            openResourceModal(label, resources);
          });
        } else {
          chip.classList.add("chip--static");
          chip.addEventListener("click", (event) => {
            event.stopPropagation();
          });
        }

        chipList.appendChild(chip);
      });

      topicButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const isActive = topicGroup.classList.toggle("is-active");
        topicButton.setAttribute("aria-expanded", String(isActive));
      });

      topicButton.addEventListener("mouseenter", () => {
        topicGroup.classList.add("is-hovered");
      });

      topicGroup.addEventListener("mouseleave", () => {
        topicGroup.classList.remove("is-hovered");
      });

      topicGroup.appendChild(topicButton);
      topicGroup.appendChild(chipList);
      topicColumn.appendChild(topicGroup);
    });

    column.appendChild(header);
    column.appendChild(topicColumn);
    categoriesRow.appendChild(column);
  });

  roadmapEl.appendChild(categoriesRow);

  roadmapEl.addEventListener("click", () => {
    roadmapEl.querySelectorAll(".topic-group.is-active").forEach((group) => {
      group.classList.remove("is-active");
      const button = group.querySelector(".topic-bubble");
      if (button) {
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
