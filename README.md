This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Contact Form Setup (EmailJS)

To enable the contact form functionality with auto-reply, you need to set up EmailJS:

### 1. Create EmailJS Account

- Go to [EmailJS](https://www.emailjs.com/) and create an account
- Create a new service (Gmail, Outlook, etc.)

### 2. Create Email Templates

#### Main Contact Template (for ACE team)

Create a template with these variables:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{to_name}}` - Recipient name (ACE Team)
- `{{message}}` - Message content
- `{{current_date}}` - Current date (optional)

#### Auto-Reply Template (for users)

Create a second template with these variables:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{to_name}}` - User's name (for personalization)
- `{{message}}` - User's original message

**Template Content:** Use the provided templates in `/email-templates/` folder:

- `main-contact-template.html` - Main contact email (HTML)
- `main-contact-template.txt` - Main contact email (Text)
- `auto-reply-template.html` - Auto-reply email (HTML)
- `auto-reply-template.txt` - Auto-reply email (Text)

### 3. Environment Variables

Create a `.env.local` file in the root directory with:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_main_template_id
NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Template Setup in EmailJS

1. **Main Contact Template:**

   - Copy content from `email-templates/main-contact-template.html`
   - Paste into your main EmailJS template
   - Configure variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`

2. **Auto-Reply Template:**

   - Copy content from `email-templates/auto-reply-template.html`
   - Paste into your auto-reply EmailJS template
   - Configure variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`

3. **Testing:**
   - Test both templates to ensure they work correctly
   - Verify that auto-reply is sent to the user
   - Verify that main email is sent to your team

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
