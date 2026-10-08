import { ICategory } from "@/types/categoryType";
import Link from "next/link";
import NavLinkClient from "./NavLinkClient";

const NavLink = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories"
  );

  const categories: ICategory[] = await res.json();

  return (
    <div>
        <NavLinkClient categories={categories} />
    </div>
  );
};

export default NavLink;