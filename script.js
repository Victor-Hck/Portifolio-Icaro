// ====== DADOS DINÂMICOS (extraído das experiências que você mandou) ======
const categories = [
    "Todos",
    "Gestão & Liderança",
    "Engenharia & Automação",
    "Manutenção & Confiabilidade",
    "Tecnologia & Ferramentas",
    "Soft Skills"
];

const skillsCards = [
    {
        categoria: "Gestão & Liderança",
        titulo: "Gestão de Manutenção & Operações",
        descricao:
            "Coordenação de equipes de Operação/Manutenção, PCP/PCM, implantação de Lean e gestão por KPIs.",
        tags: ["Gestão de manutenção", "PCP/PCM", "Lean Manufacturing", "KPIs", "Planos de cargos", "Padronização"],
    },
    {
        categoria: "Engenharia & Automação",
        titulo: "Sistemas Elétricos & Automação",
        descricao:
            "Desempenho de linhas, especificações, AutoCAD Electrical, PLC/supervisório, comissionamento.",
        tags: ["Sistemas elétricos", "Automação industrial", "PLC", "Supervisório", "AutoCAD Electrical", "Comissionamento"],
    },
    {
        categoria: "Manutenção & Confiabilidade",
        titulo: "Confiabilidade & Qualidade",
        descricao:
            "Preditiva/preventiva/corretiva, análise de falhas (Ishikawa, 5W+2H, Árvore de Falhas), NR-10/NR-12.",
        tags: ["Preditiva", "Preventiva", "Corretiva", "Ishikawa", "5W+2H", "Árvore de Falhas", "NR-10", "NR-12"],
    },
    {
        categoria: "Tecnologia & Ferramentas",
        titulo: "Sistemas & Indicadores",
        descricao:
            "SAP para gestão de manutenção, dashboards e scripts de apoio à automação.",
        tags: ["SAP", "Dashboards", "Indicadores", "Scripts", "Integração"],
    },
    {
        categoria: "Soft Skills",
        titulo: "Liderança & Comunicação",
        descricao:
            "Formação e condução de times, treinamento, comunicação interpessoal e pensamento estratégico.",
        tags: ["Liderança", "Treinamento", "Comunicação", "Estratégia", "Resolução de problemas"],
    },
];

// ====== RENDER ======
const $filters = document.getElementById("skills-filters");
const $grid = document.getElementById("skills-grid");

function renderFilters() {
    categories.forEach((cat, i) => {
        const chip = document.createElement("button");
        chip.className = "skills-chip" + (i === 0 ? " active" : "");
        chip.textContent = cat;
        chip.dataset.filter = cat;
        chip.addEventListener("click", () => {
            document.querySelectorAll(".skills-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            renderCards(cat);
        });
        $filters.appendChild(chip);
    });
}

function renderCards(filter = "Todos") {
    $grid.innerHTML = "";
    const list = skillsCards.filter(c =>
        filter === "Todos" ? true : c.categoria === filter
    );
    list.forEach(card => {
        const el = document.createElement("article");
        el.className = "skills-card";
        el.innerHTML = `
            <h3>${card.titulo}</h3>
            <p>${card.descricao}</p>
            <div class="skills-tags">
                ${card.tags.map(t => `<span class="skills-tag">${t}</span>`).join("")}
            </div>
        `;
        $grid.appendChild(el);
    });
}

renderFilters();
renderCards(); // inicial "Todos"