import { createContext } from "react";

export const FaqsContext = createContext({
  faqs: [
    {
      id: 1,
      question: 'What is a VPN?',
      answer: 'VPN stands for “virtual private network” — a service that protects your internet connection and privacy online. It creates an encrypted tunnel for your data, protects your online identity by hiding your IP address, and allows you to use public Wi-Fi hotspots safely.'
    },
    {
      id: 2,
      question: 'Can you be tracked if you use a VPN?',
      answer: 'VPN gives you a new IP address and encrypts the connection between your device and the internet, so no one can see what data you send and receive. But it won’t make you anonymous — there are other ways someone could track your actions online. Hackers could install malware (keyloggers, spyware, etc.) on your device. Or if you overshare online and use the same username everywhere, anyone with decent googling skills can gather a wealth of information about you.'
    },
    {
      id: 3,
      question: 'Is using a VPN legal?',
      answer: 'VPNs are legal in many countries, but some have banned VPNs altogether or heavily regulate their usage. It’s possible to use a VPN connection to bypass government censorship and gain internet access in countries like these. If you decide to do it, make sure to download the apps and get your subscription before traveling there.'
    },
    {
      id: 4,
      question: 'Are there any alternatives to VPNs?',
      answer: 'You can use other software that offers similar features to a VPN, but nothing can replace the all-round security and privacy a VPN offers. A Smart DNS will not encrypt your traffic. If you use Tor, it will protect your privacy, but many websites will block your access. So if you want a service that protects your privacy, gives you new IP addresses, and encrypts your data at the same time, opt for a reliable VPN provider.'
    },
    {
      id: 5,
      question: 'Is a virtual private network safe to use?',
      answer: 'If you choose a trustworthy VPN service provider, using it is absolutely safe. What is a VPN provider you can’t trust? The one that says it’s free. It will track your online activity, what websites you visit, the content you interact with, and sell it to the highest bidder. Why? Because they must maintain hundreds of servers in different countries and hire people to take care of the infrastructure. A service that big has to make money somehow, so you end up paying for it in some way. Besides, a free VPN won’t encrypt your connection properly; they are also prone to IP and DNS leaks and might even contain malware or spy on your entire local network. All of this means that if you do your research and choose the best VPN provider out there, using a VPN isn’t dangerous.'
    },
    {
      id: 6,
      question: 'Should I leave my VPN on all the time?',
      answer: "Yes, you should keep your virtual private network on all the time — with a few exceptions. It's the only way to be sure that your real location and IP address are hidden, online data encrypted, and browsing history invisible to your internet service provider and other third parties."
    },
  ]
})