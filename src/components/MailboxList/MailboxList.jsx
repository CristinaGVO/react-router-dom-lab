import { Link } from "react-router-dom";

export default function MailboxList({ mailboxes }) {
  return (
    <main>
      <h1>Mailboxes</h1>

      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            
         <Link to={`/mailboxes/${mailbox._id}`} className="mail-box">
                    {mailbox._id}
        </Link>

          </li>
        ))}
      </ul>
    </main>
  );
}
