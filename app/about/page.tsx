import Image from "next/image";
import SideBar from "@/components/sidebar";
import PFP from "@/components/about/bigProfilePicture";
import '@/index.css';

export default function Page() {
  return (<div><SideBar /><PFP /></div>);
};