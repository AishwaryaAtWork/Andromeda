import Item from "./Item";
import { TEAM, RESOURCES, COMPANIES, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={TEAM} title="TEAM" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANIES} title="COMPANIES" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;
