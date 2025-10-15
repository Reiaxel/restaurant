import { useEffect, useState } from "react";

export default function StoreStatusAlert() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    const hour = now.getHours();
    const minute = now.getMinutes();

    // Horario: Martes (2) a Domingo (0), de 18:00 a 23:59
    const isWorkingDay = day >= 2 || day === 0;
    const isWorkingHour =
      (hour > 18 || (hour === 18 && minute >= 0)) && hour < 24;

    setIsOpen(isWorkingDay && isWorkingHour);

    // Mostrar solo una vez al día
    const lastShownDate = localStorage.getItem("storeAlertDate");
    const today = now.toDateString();

    if (lastShownDate !== today) {
      setShowAlert(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("storeAlertDate", new Date().toDateString());
    setShowAlert(false);
  };

  if (!showAlert) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center w-[90%] max-w-sm mx-4 animate-fade-in">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4">
          {isOpen ? "¡Bienvenido!" : "Estamos Cerrados"}
        </h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
          {isOpen
            ? "Realiza tu pedido, estamos atendiendo con gusto."
            : "Abrimos de Martes a Domingo de 6:00 PM a 11:59 PM."}
        </p>
        <button
          onClick={handleClose}
          className="bg-orange-500 text-white w-full sm:w-auto px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-all text-sm sm:text-base font-medium"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
