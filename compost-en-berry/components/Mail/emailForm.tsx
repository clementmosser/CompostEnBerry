"use client"

import { sendEmail } from "@/lib/action"
import { useActionState, useEffect } from "react"

export default function EmailForm() {
  const [sendEmailState, sendEmailAction] = useActionState(sendEmail, {
    error: null,
    success: false
  })
  useEffect(() => {
    if (sendEmailState.success) {
      alert("Email sent!")
    }
    if (sendEmailState.error) {
      alert("Error sending email!")
    }
  }, [sendEmailState])
  return (
    <form action={sendEmailAction}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" cols={30} rows={10}></textarea>
      <button type="submit">Send</button>
    </form>
  )
}