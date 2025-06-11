# 🚀 PWA com Notificações Push

Aplicativo construído com **React + Vite + TailwindCSS** com suporte completo a:

- ✅ **PWA standalone**
- ✅ **Cache offline**
- ✅ **Notificações push em tempo real via OneSignal**

---

## 🛠️ Tecnologias Utilizadas

- [x] Vite + React
- [x] Tailwind CSS
- [x] [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/)
- [x] [OneSignal Push Notifications](https://onesignal.com/)
- [x] Service Worker + Manifest.json

---

## ▶️ Rodando Localmente

```bash
git clone https://github.com/WallanDavid/meu-pwa.git
cd meu-pwa
npm install
npm run dev
```

---

## 🔨 Build para Produção

```bash
npm run build
npx serve dist
```

---

## 🔔 Push Notifications

A permissão é solicitada no carregamento da aplicação.

- Integração realizada com o pacote [`react-onesignal`](https://www.npmjs.com/package/react-onesignal)
- Notificações enviadas via painel do [OneSignal](https://onesignal.com/)

---

## 📦 Deploy

**Recomendado:** [Vercel](https://vercel.com)

---

## 👨‍💻 Autor

Feito com 💙 por [Wallan Peixoto](https://github.com/WallanDavid)
