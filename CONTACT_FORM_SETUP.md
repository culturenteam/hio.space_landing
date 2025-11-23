# Contact Form Setup

The contact form uses Web3Forms (free service) to send emails to hi@hio.space.

## Setup Steps (5 minutes)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started" or "Create Access Key"
3. Enter your email: `hi@hio.space`
4. Verify your email (check inbox)
5. Copy the Access Key provided

## Add Access Key to Code

Open `components/Contact.tsx` and replace line 24:

```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace this
```

With your actual access key:

```typescript
access_key: 'your-actual-key-here',
```

## Alternative: Use Environment Variable (Recommended)

1. Create `.env` file in project root:
```
VITE_WEB3FORMS_KEY=your-actual-key-here
```

2. Update `components/Contact.tsx` line 24:
```typescript
access_key: import.meta.env.VITE_WEB3FORMS_KEY,
```

3. Add to Cloudflare Pages:
   - Go to project settings → Environment variables
   - Add: `VITE_WEB3FORMS_KEY` = your key

## Test

After setup:
1. Fill out the contact form
2. Submit
3. Check hi@hio.space inbox for the message

## Free Tier Limits

- 250 submissions per month
- No credit card required
- Perfect for landing pages
