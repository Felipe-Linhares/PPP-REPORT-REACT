// src/App.tsx
import { ptBR } from "date-fns/locale/pt-BR";
import { useEffect, useRef, useState } from "react"; // Re-adicionado useEffect aqui
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

// Import components
import FormDatePicker from "./components/forms/FormDatePicker";
import FormInput from "./components/forms/FormInput";
import FormSelect from "./components/forms/FormSelect";
import ReportPreview from "./components/ReportPreview";
import TabButtons from "./components/TabButtons";
import TextAreaTab from "./components/TextAreaTab";

// Import utilities and hooks
import { useAutoResizeTextarea } from "./hooks/useAutoResizeTextarea";
import { formatReportList } from "./utils/reportFormatter";

import "./index.css";

// Register datepicker locale once for the entire application
registerLocale("pt-BR", ptBR);
setDefaultLocale("pt-BR");

function App() {
  // State variables for form fields
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [squad, setSquad] = useState<string>("");
  const [sprint, setSprint] = useState<string>("");
  const [progressText, setProgressText] = useState<string>("");
  const [plansText, setPlansText] = useState<string>("");
  const [problemsText, setProblemsText] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("progress");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // State for dark mode, initialized from localStorage or system preference
  // State for dark mode, initialized from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedMode = localStorage.getItem("theme");
      if (savedMode === "dark") return true;
      if (savedMode === "light") return false;
    }
    // Fallback to system preference if no saved preference
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  // Effect to apply 'dark-mode' class to body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]); // Re-run this effect whenever isDarkMode changes
  // Re-run this effect whenever isDarkMode changes

  // Refs for textareas to be used with auto-resize hook (CORRIGIDO TIPO: | null)
  const progressTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const plansTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const problemsTextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  // Apply auto-resize hook to each textarea
  useAutoResizeTextarea(progressTextAreaRef, progressText);
  useAutoResizeTextarea(plansTextAreaRef, plansText);
  useAutoResizeTextarea(problemsTextAreaRef, problemsText);

  // Example squads (could be fetched from an API in the future)
  const squads: string[] = ["Backend", "Frontend", "Hardware/IoT", "Mobile"];

  // Define tab metadata for easy mapping (Labels em Português)
  const tabs = [
    { id: "progress", label: "Progressos" },
    { id: "plans", label: "Planos" },
    { id: "problems", label: "Problemas" },
  ];

  /**
   * Generates the full PPP report string based on current state.
   * @returns The formatted report string.
   */
  const generateReport = (): string => {
    const maxLineLength = 70;
    const indent = "    "; // Consistent indentation for wrapped lines

    // Format date from YYYY-MM-DD to DD/MM/YYYY
    const [year, month, day] = date.split("-");
    const formattedDate = `${day}/${month}/${year}`; // <-- ESTA É A LINHA CORRETA!

    return `PPP REPORT
DATA: ${formattedDate}
SQUAD: ${squad || "Não informado"}
SPRINT(s): ${sprint || "Não informada"}
===========
PROGRESSOS
${formatReportList(progressText, maxLineLength, indent)}
===========
PLANOS
${formatReportList(plansText, maxLineLength, indent)}
===========
PROBLEMAS
${formatReportList(problemsText, maxLineLength, indent)}`;
  };

  // The report content is re-generated whenever relevant state changes
  const reportContent = generateReport();

  /**
   * Handles copying the generated report content to the clipboard.
   */
  const handleCopyReport = async () => {
    try {
      await navigator.clipboard.writeText(reportContent);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy report: ", err);
    }
  };

  /**
   * Handles tab switching by setting the active tab state.
   * @param tabId - The ID of the tab to activate ('progress', 'plans', 'problems').
   */
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  /**
   * Toggles the dark mode state.
   */
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      {" "}
      {/* Fragmento para envolver múltiplos elementos raiz */}
      {/* Botão de alternância de tema - POSIÇÃO FIXA NO DOM */}
      <button className="theme-toggle-button" onClick={toggleDarkMode}>
        {isDarkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
      </button>
      <div className="container">
        <div className="form-section">
          <h1>Gerador de PPP</h1> {/* Título principal em Português */}
          {/* Certifique-se que o botão NÃO ESTÁ AQUI DENTRO da form-section */}
          <FormDatePicker
            id="date"
            label="Data"
            selectedDate={new Date(date)}
            onChange={(selectedDate) => {
              if (selectedDate)
                setDate(selectedDate.toISOString().split("T")[0]);
            }}
            dateFormat="dd/MM/yyyy"
            className="date-input"
            wrapperClassName="date-picker-wrapper"
          />
          <FormSelect
            id="squad"
            label="Squad"
            value={squad}
            onChange={(e) => setSquad(e.target.value)}
            options={squads}
            placeholder="Selecione um squad"
          />
          <FormInput
            id="sprint"
            label="Sprint"
            type="text"
            value={sprint}
            onChange={(e) => setSprint(e.target.value)}
            placeholder="Digite a sprint..."
          />
          <div className="tabs">
            <TabButtons
              tabs={tabs}
              activeTab={activeTab}
              onTabClick={handleTabClick}
            />

            <TextAreaTab
              tabId="progress"
              activeTab={activeTab}
              placeholder="Digite os progressos..."
              value={progressText}
              onChange={(e) => setProgressText(e.target.value)}
              textAreaRef={progressTextAreaRef}
            />
            <TextAreaTab
              tabId="plans"
              activeTab={activeTab}
              placeholder="Digite os planos..."
              value={plansText}
              onChange={(e) => setPlansText(e.target.value)}
              textAreaRef={plansTextAreaRef}
            />
            <TextAreaTab
              tabId="problems"
              activeTab={activeTab}
              placeholder="Digite os problemas..."
              value={problemsText}
              onChange={(e) => setProblemsText(e.target.value)}
              textAreaRef={problemsTextAreaRef}
            />
          </div>
        </div>

        {/* ReportPreview renderiza seu próprio h1, botões e texto */}
        <ReportPreview
          reportContent={reportContent}
          isCopied={isCopied}
          onCopy={handleCopyReport}
        />
      </div>
    </>
  );
}

export default App;
