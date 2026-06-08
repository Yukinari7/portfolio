"use client"

import { ChevronDownIcon, CloudAlert, CloudCheck, Mail, MapPin, Phone } from "lucide-react";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    open:boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContactModal({open, setOpen}:Props) {
const [isOnline, setIsOnline] = useState(true);
const [connectionMessage, setConnectionMessage] = useState("");
const [connectionType, setConnectionType] = useState<"online" | "offline" | null>(null);

useEffect(() => {
  const handleOnline = () => {
    setIsOnline(true);
    setConnectionType("online");
    setConnectionMessage(
      "Connection restored"
    );
    setTimeout(()=> {
      setConnectionMessage("")
    }, 5000);
  };

  const handleOffline = () => {
    setIsOnline(false);
    setConnectionType("offline");
    setConnectionMessage(
      "You are currently offline"
    );
  };

  if(!navigator.onLine){
      setConnectionMessage(
      "You are currently offline"
    );
  }

  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);

  return () => {
    window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
  };
}, []);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        inquiryType: "Freelance Project",
        message: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessages, setErrorMessages] = useState<string[] | null>(null);

    // Auto-hide success and error messages
    useEffect(() => {
      if (!successMessage) return;
      const t = setTimeout(() => setSuccessMessage(''), 5000);
      return () => clearTimeout(t);
    }, [successMessage]);

    useEffect(() => {
      if (!errorMessages) return;
      const t = setTimeout(() => setErrorMessages(null), 7000);
      return () => clearTimeout(t);
    }, [errorMessages]);

    if (!open) return null;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Extracted submit logic so it can be retried programmatically
    const submitForm = async () => {
      if (loading) return;
      if (!navigator.onLine) {
        setErrorMessages([
          "No internet connection. Please check your network and try again."
        ]);
        return;
      }
      setLoading(true);
      setSuccessMessage("");
      setErrorMessages(null);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setSuccessMessage(data.message || "Message sent successfully");
          setErrorMessages(null);
          setFormData({ name: "", email: "", inquiryType: "Freelance Project", message: "" });
        } else {
          // validation or server errors
          if (data.errors) {
            const errs = Object.values(data.errors).flat().filter(Boolean) as string[];
            setErrorMessages(errs.length ? errs : [data.message || 'Validation failed']);
          } else if (data.message || data.error) {
            const msg = data.message || data.error;
            setErrorMessages([msg]);
          } else {
            setErrorMessages(["Failed to send message. Please try again."]);
          }
        }
      } catch (err) {
        void err;
        setErrorMessages(["An unexpected error occurred. Please try again later."]);
        setSuccessMessage("");
      } finally {
        setLoading(false);
      }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await submitForm();
    };

  return (
    <div className="fixed inset-0 z-[10000]">
        <div className="absolute flex items-center justify-center inset-0 bg-transparent backdrop-blur-sm">
            <div className="relative z-10 w-[95%] mx-auto bg-white dark:bg-black rounded-lg shadow-xl 
             animate-[fadeIn_.3s] max-h-[80vh] overflow-hidden overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] md:grid-cols-2 gap-5 py-16 md:px-5">
                <div className="flex flex-col justify-between px-5">
                    <div className="space-y-4">
                    <div className="rounded-full border border-gray-700 bg-neutral-900 flex items-center gap-2 w-fit py-1 px-1 text-xs text-gray-300 pr-2"><Mail className="w-5 h-5 p-1 border-none items-center bg-black text-yellow-500 flex justify-center rounded-full"/>Start a project</div>
                    <h2 className="lg:text-6xl text-4xl font-[500] md:font-[300] text-black dark:text-[#e5e4e2] [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">Let&apos;s build your next project.</h2>
                    <p className="dark:text-gray-400 text-gray-700 max-w-xl">Ready to launch your next project? Fill out the form or 
                      reach out directly to start a conversation about your business needs and how we can help you grow.</p>
                    
                    {connectionMessage && (
                      <motion.div key="connectionMessage" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}  className={`px-4 py-3 w-fit text-sm transition-all duration-300 flex items-center gap-2
                      ${connectionType === "online" ? ("bg-green-500/10 text-green-500 border border-green-500/20"):"bg-red-500/10 text-red-500 border border-red-500/20"}`}>{connectionType === "online" ? (<CloudCheck/>):(<CloudAlert/>)}{connectionMessage}</motion.div>
                    )}

                    </div>

                  <div className="">
                    <AnimatePresence mode="wait">
                      {errorMessages ? (
                          <motion.div
                            key="error"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-red-50 border-l-[2px] border-red-600 flex flex-col w-fit gap-2 hidden md:flex"
                          >
                            <div className="text-red-600 px-5 py-2">
                                {errorMessages.map((m, i) => (
                                    <div key={i}>{m}</div>
                                ))}
                            </div>
                          </motion.div>
                        ) : successMessage ? (
                            <motion.div
                              key="success"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="bg-green-50 border-l-[2px] border-green-600 flex flex-col w-fit gap-2 hidden md:flex"
                            >
                              <div className="text-green-600 px-5 py-2">{successMessage}</div>
                            </motion.div>
                          ) : null}
                    </AnimatePresence>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col border border-gray-800 bg-neutral-900 md:rounded-xl gap-3 md:p-8 p-5">
                        <div className="space-y-1">
                            <label htmlFor="fullname" className="text-gray-400">Name</label>
                            <input
                              type="text"
                              id="fullname"
                              name="name"
                              autoComplete="name"
                              placeholder="Halley George"
                              value={formData.name}
                              onChange={handleChange}
                              className="border border-gray-600 px-3 py-2 rounded-xl text-gray-400 w-full"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="email" className="text-gray-400">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              autoComplete="email"
                              placeholder="halley@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              className="border border-gray-600 px-3 py-2 rounded-xl text-gray-400 w-full"
                            />
                        </div>
                    <div className="space-y-1">
                        <p className="text-gray-400">Inquiry type</p>
                        <div className="relative w-full ">
                            <select
                              id="inquiryType"
                              name="inquiryType"
                              aria-label="Inquiry type"
                              value={formData.inquiryType}
                              onChange={handleChange}
                              className="block text-sm/6 w-full border px-3 py-2 appearance-none rounded-xl text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:outline-offset-1 focus:outline-white"
                            >
                                <option>Freelance Project</option>
                                <option>Full-time Role</option>
                                <option>Consulting</option>
                                <option>Other</option>
                            </select>
                            <ChevronDownIcon aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"/>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="message" className="text-gray-400">Message</label>
                        <textarea
                        name="message"
                        id="message"
                        autoComplete="off"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        className="border border-gray-600 p-2 h-[150px] rounded-xl w-full text-gray-300"></textarea>
                    </div>
                    <button type="submit"
                    disabled={!isOnline || loading} 
                    className="bg-blue-700  disabled:cursor-not-allowed text-white cursor-pointer active:scale-105 hover:bg-blue-600 duration-300 transition-all py-1 justify-center px-4 lg:w-fit rounded-full flex items-center gap-2"
                    >{loading ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Sending...
                        </>
                    ) : isOnline ? "Submit" : "Submit"}</button>
                </form>
                <AnimatePresence mode="wait">
                      {errorMessages ? (
                          <motion.div
                            key="error"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-red-50 border-l-[2px] border-red-600 flex flex-col w-full gap-2 md:hidden flex"
                          >
                            <div className="text-red-600 px-5 py-2">
                                {errorMessages.map((m, i) => (
                                    <div key={i}>{m}</div>
                                ))}
                            </div>
                          </motion.div>
                        ) : successMessage ? (
                            <motion.div
                              key="success"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="bg-green-50 border-l-[2px] border-green-600 flex flex-col w-full gap-2 md:hidden flex"
                            >
                              <div className="text-green-600 px-5 py-2">{successMessage}</div>
                            </motion.div>
                          ) : null}
                    </AnimatePresence>
                </div>
                <button aria-label="Close modal" onClick={() => setOpen(false)} className="absolute md:top-3 top-5 text-black dark:text-white right-4 w-10 h-10 cursor-pointer"><CgClose/></button>
            </div>
        </div>
    </div>
  )
}
