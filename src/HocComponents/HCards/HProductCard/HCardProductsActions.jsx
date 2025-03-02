import React from "react";
import { CardProductActions } from "../Cards.styled";
import HDropdown from "../../HDropdown/HDropdown";
import deleteIcon from "../../../../assets/img/youtube/delete.svg";

const HCardProductsActions = ({
  statusOptions,
  newStatus,
  purchase,
  setShowSecurity,
}) => {
  return (
    <CardProductActions>
      <HDropdown
        options={statusOptions}
        label="Status"
        name={`newStatus-${purchase._id}`}
        id={`newStatus-${purchase._id}`}
        onChange={(e) => newStatus(e, purchase)}
        value={purchase.status}
      />
      {purchase.status?.toLowerCase() === "open" && (
        <div className="delete" onClick={() => setShowSecurity(purchase._id)}>
          <img src={deleteIcon} alt="" />
        </div>
      )}
    </CardProductActions>
  );
};

export default HCardProductsActions;
