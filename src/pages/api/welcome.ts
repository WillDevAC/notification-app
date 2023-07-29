import MagicBell from "magicbell"
import type { NextApiRequest, NextApiResponse } from "next"

interface WelcomeRequest extends NextApiRequest {
  body: {
    userId: string
  }
}

type ResponseData = {
  status: string
}

const magicbell = new MagicBell({
  apiKey: "64a2a6fff4d314ce9f44a171a31c84232fe49b6b",
  apiSecret: "V8yeZHZymWwCitXVGMYlB7yLrG3YvPFfuxb7Sp72",
})

export default async function handler(
  req: WelcomeRequest,
  res: NextApiResponse<ResponseData>
) {
  await magicbell.notifications.create({
    title: "Thanks for subscribing!",
    action_url: "https://magicbell.com",
    recipients: [{ external_id: req.body.userId }],
    category: "default",
  })
  res.status(200).json({ status: "success" })
}
