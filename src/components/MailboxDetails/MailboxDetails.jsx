import { useParams } from "react-router-dom";

export default function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams();

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) return <h2>Mailbox Not Found!</h2>;

  return (
    <main>
      <h1>Mailbox Details</h1>
      <p><strong>Mailbox Number:</strong> {selectedBox._id}</p>
      <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
      <p><strong>Size:</strong> {selectedBox.boxSize}</p>
    </main>
  );
}
