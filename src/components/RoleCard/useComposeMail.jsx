export default function useComposeMail() {
  function handleApply(title, level, duration, location) {
    console.log(title, level);

    // Define the email address and subject
    var address = "career@qoinpal.com";
    var subject = `Application for postion of ${title}`;

    // Define the message body
    var message = `Dear Hiring Manager,\n\nI am writing to express my interest in the ${title} position that I saw on your website. I have attached my resume and cover letter for your review.\n\nThank you for considering my application. I look forward to hearing from you soon.\n\nSincerely,\n[Applicant's name]`;
    console.log(message);
    // Use the email client's "mailto" function to open a new email window with the recipient, subject, and message
    window.location.href =
      "mailto:" + address + "?subject=" + subject + "&body=" + message;
  }

  return { handleApply };
}
