import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiMapPin, FiMessageSquare, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate network request for UI demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      alert('Message sent successfully!');
      reset();
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="text-blue-500 font-medium mb-2 uppercase tracking-widest">Get In Touch</h4>
          <h2 className="section-title">Contact Me</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Let's Talk About Your Next Project</h3>

            <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FiMail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">Email</h4>
                <a href="mailto:junaidhunjra2808@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors block mt-1">
                  junaidhunjra2808@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 hover:emerald-500 dark:hover:border-emerald-500 transition-colors group">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FaWhatsapp size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">WhatsApp</h4>
                <a href="https://wa.me/923191726316" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors block mt-1">
                  0319-1726316
                </a>
                <a href="https://wa.me/923191726316" target="_blank" rel="noreferrer" className="text-sm text-emerald-500 font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                  <FiMessageSquare /> Quick Chat
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 hover:violet-500 dark:hover:border-violet-500 transition-colors group">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-500/20 text-violet-500 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">Location</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Gujranwala, Pakistan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-[1.5] bg-slate-50 dark:bg-dark-card rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-800 dark:text-slate-200 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                    })}
                    className={`w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-800 dark:text-slate-200 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className={`w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-800 dark:text-slate-200 ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <span className="text-red-500 text-xs mt-1 block">{errors.subject.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  rows="5"
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none text-slate-800 dark:text-slate-200 ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
