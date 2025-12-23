import { motion } from "framer-motion";

export default function Toggle({ 
  checked = false, 
  onChange, 
  label,
  disabled = false 
}) {
  const toggleSwitch = () => {
    if (disabled || !onChange) return;
    onChange(!checked);
  };

  return (
    <button
      type="button"
      onClick={toggleSwitch}
      disabled={disabled}
      className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-200 flex items-center p-1 ${
        checked 
          ? "bg-brand-primary" 
          : "bg-gray-700"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      style={{
        justifyContent: checked ? "flex-start" : "flex-end",
      }}
      aria-label={label || "Toggle"}
      aria-checked={checked}
      role="switch"
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full shadow-lg"
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </button>
  );
}

