<template>
  <div class="contact-section">
    <div class="contact-container">
      <h2 class="section-title">Get in Touch</h2>
      <div class="contact-form-container">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="form-input"
              required
            />
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="form-input"
              required
            />
          </div>
          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-textarea"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-primary submit-btn"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else class="spinner"></span>
          </button>
          <p :class="['form-message', messageType]">{{ message }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      isSubmitting: false,
      message: "",
      messageType: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;
      this.message = "Sending...";
      this.messageType = "";

      try {
        const templateParams = {
          from_name: this.form.name,
          from_email: this.form.email,
          message: this.form.message,
        };

        await emailjs.send(
          "service_2xizqfm",
          "template_674tgej",
          templateParams
        );

        this.message = "Thanks for your message! I'll get back to you soon.";
        this.messageType = "success";
        this.form = { name: "", email: "", message: "" };
      } catch (error) {
        console.error("Failed to send message:", error);
        this.message = "Failed to send message. Please try again later.";
        this.messageType = "error";
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
