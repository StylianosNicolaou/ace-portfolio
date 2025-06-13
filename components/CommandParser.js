"use client";

import { useRouter } from "next/router";
import { useState } from "react";

export default function CommandParser() {
  const router = useRouter();
  const [showHelp, setShowHelp] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = e.target.command.value.trim().toLowerCase();
    
    //Code snippet for "Code Station..."
    // Parse "cd" commands
    if (cmd.startsWith("cd ")) {
      const section = cmd.replace("cd ", "").trim();
      
      // Map section names for page navigation
      const pageMap = {
        "contact": "/contact",
        "packages": "/packages"
      };
      
      // Map section names for same-page navigation
      const sectionMap = {
        "home": "home",
        "hero": "home",
        "coding": "coding",
        "station": "coding",
        "about": "about",
        "projects": "projects",
        "project": "projects"
      };
      
      // Check if it's a page navigation first
      if (pageMap[section]) {
        router.push(pageMap[section]);
      }
      // Then check for same-page sections
      else if (sectionMap[section]) {
        const targetSection = sectionMap[section];
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ 
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }
      }
      // Show error if section not found
      else {
        setErrorMessage(`Section "${section}" not found. Type "help" to see available commands.`);
        setShowError(true);
      }
    }
    //...Code snippet for "Code Station"

    // Handle help command
    else if (cmd === "help") {
      setShowHelp(true);
    }
    // Handle invalid commands
    else if (cmd !== "") {
      setErrorMessage(`Command "${cmd}" not recognized. Type "help" to see available commands.`);
      setShowError(true);
    }
    
    e.target.reset();
  };

  return (
    <div className="w-full relative">
      <label className="font-semibold block mb-3 text-heading">Terminal:</label>
      <form onSubmit={handleCommand}>
        <input
          name="command"
          placeholder="Type command (e.g., cd about)..."
          className="w-full p-4 rounded-xl font-mono text-sm bg-body/10 border border-accent/20 text-body placeholder-soft focus:outline-none focus:border-primary/50 focus:bg-body/5 transition-all"
          autoComplete="off"
        />
      </form>
      <div className="text-xs text-body mt-2 opacity-80">
        Try: cd home, cd about, cd projects, cd contact, cd packages, help
      </div>

      {/* Custom Help Popup */}
      {showHelp && (
        <div 
          className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowHelp(false)}
        >
          <div 
            className="bg-white/12 backdrop-blur-xl border border-white/40 rounded-3xl p-8 max-w-md w-full shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-heading mb-6 text-center">
              Available Commands
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="space-y-1 text-body font-mono text-sm">
                  <div>• cd home</div>
                  <div>• cd coding</div>
                  <div>• cd about</div>
                  <div>• cd projects</div>
                  <div>• cd contact</div>
                  <div>• cd packages</div>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setShowHelp(false)}
              className="w-full mt-6 p-3 rounded-xl bg-body/20 border border-accent/30 text-heading font-semibold hover:bg-body/30 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Custom Error Popup */}
      {showError && (
        <div 
          className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowError(false)}
        >
          <div 
            className="bg-white/12 backdrop-blur-xl border border-white/40 rounded-3xl p-8 max-w-md w-full shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-heading mb-6 text-center">
              Error
            </h3>
            
            <div className="mb-6">
              <p className="text-body text-center">
                {errorMessage}
              </p>
            </div>
            
            <button
              onClick={() => setShowError(false)}
              className="w-full p-3 rounded-xl bg-body/20 border border-accent/30 text-heading font-semibold hover:bg-body/30 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}