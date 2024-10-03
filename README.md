# humanitix-monitor
sends message to slack webhook when new tickets are sold on humanitix

excuse the terrible code 

o(*￣▽￣*)ブ

# KV setup
![image](https://github.com/user-attachments/assets/bd5857d1-6638-4207-aa3b-5615f6558460)

![image](https://github.com/user-attachments/assets/05d8e680-9ece-4a37-a9de-785d8678c995)

![image](https://github.com/user-attachments/assets/38339b2f-caaf-4daa-a2df-117ff5b7b3ca)

![image](https://github.com/user-attachments/assets/00ca6cc2-ace6-474d-b1de-d2c0a25e5ba8)


# Worker setup
standard init setup > ```npm create cloudflare```

replace the src folder and modify the wrangler.toml with the worker name

then put your kv id found in the cloudflare panel in the wrangler.toml file

![image](https://github.com/user-attachments/assets/3a954b6d-095b-4c25-bbef-845ba3faf97f)

deploy it

```npm run deploy```

# slack setup
create a new workflow automation in slack, use this for webhook trigger option

![image](https://github.com/user-attachments/assets/906a57fb-7585-4c2a-beb1-29816f8d9217)

then copy this (or change)

![image](https://github.com/user-attachments/assets/9aada82c-6834-4b05-bfc0-14f7f5f1af3b)


# secret setup
add your secrets

```npx wrangler secret put humanitixapikey```
> api key obtained from here: https://console.humanitix.com/console/account/advanced/api-key

```npx wrangler secret put slackwebhook```
> webhook url obtained from the previous section

```npx wrangler secret put humanitixeventid```
> event id, can probably be obtained from the panel but easier to get it from this api https://humanitix.stoplight.io/docs/humanitix-public-api/476881e4b5d55-get-events


# cron trigger setup
go to this in the cloudflare panel


![image](https://github.com/user-attachments/assets/aeb0be77-423f-42f8-a002-07273b637685)

![image](https://github.com/user-attachments/assets/654f8c67-93b7-4350-8b5f-7612661ddd34)

![image](https://github.com/user-attachments/assets/037ec4bb-7c20-4648-8cf5-02a6c244e606)

change accordingly and save.

profit??





