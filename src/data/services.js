import { MonitorSmartphone, Gauge, ShoppingBag, Wrench } from "lucide-react";

const services = [
  {
    title: "Website redesign and modernization",
    icon: MonitorSmartphone,
    text: "Update an aging site so it reads clearly and works on phones. Recent production work includes migrating administrative interfaces from Bootstrap 3 to Bootstrap 5.",
  },
  {
    title: "Speed and mobile fixes",
    icon: Gauge,
    text: "Layout bugs, broken small-screen views, and browser inconsistencies. This is the same kind of production frontend debugging I do on JavaScript and Vue.js interfaces.",
  },
  {
    title: "E-commerce and WooCommerce",
    icon: ShoppingBag,
    text: "Ordering and storefront issues on WooCommerce. At PRN Vision Group I maintained WooCommerce orders, Cybersource payments, and NetSuite ERP sync.",
  },
  {
    title: "Ongoing maintenance",
    icon: Wrench,
    text: "Small updates and production bug fixes after a site is already live, from a broken page to a change that needs to ship without taking the store down.",
  },
];

export default services;
