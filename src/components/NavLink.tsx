import { ICategory } from "@/types/categoryType";
import Link from "next/link";
import NavLinkClient from "./NavLinkClient";

const NavLink = async () => {
  const categoryApi = process.env.CATEGORY_API;

  if (!categoryApi) {
    throw new Error("CATEGORY_API is not defined");
  }

  const res = await fetch(categoryApi);

  const categories: ICategory[] = await res.json();

  return (
    <div>
        <NavLinkClient categories={categories} />
    </div>
  );
};

export default NavLink;