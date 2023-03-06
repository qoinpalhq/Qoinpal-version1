export default function useComposeMail() {
  function handleApply(title, level, duration, location) {
    console.log(title, level);

    // Define the email address and subject
    var address = "career@qoinpal.com";
    var subject = `Application for postion of ${title}`;

    // Define the message body

    // Use the email client's "mailto" function to open a new email window with the recipient, subject, and message
    window.location.href =
      "mailto:" + address + "?subject=" + subject;
  }

  return { handleApply };
}
