import React from "react";
import { UserIcon, TruckIcon } from "@heroicons/react/24/solid";
import { Popover, type PopoverProps } from "@mui/material";

interface IFulfillmentMangementProps {}

const FulfillmentMangement: React.FC<IFulfillmentMangementProps> = (props) => {
  const [openPopup, setOpenPopup] = React.useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setOpenPopup(true)}
        className="p-2 text-black-500 rounded-full bg-transparent justify-center items-center flex border border-gray-100"
      >
        <TruckIcon className="w-8 h-8 text-gray-600 mr-1" />
        Store 7
      </button>

      {openPopup ? (
        <Popover
          open={openPopup}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{ width: "200px", height: "500px" }}
          slotProps={{
            paper: {
              sx: {
                borderRadius: "var(--border-radius-large, 16px)",
                overflow: "visible",
                maxWidth: 327,
                boxShadow: "0px 8px 28px 0px rgba(0, 0, 0, 0.28)",
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 80,
                  width: 20,
                  height: 20,
                  backgroundColor: "inherit",
                  transform: "translateY(-50%) rotate(45deg)",
                  boxShadow: "-3px -3px 5px -2px rgba(0,0,0,0.1)",
                },
              },
            },
          }}
        >
          <div className="w-[150px] min-h-[400px] shadow-lg bg-gray-50">
            <h1>Hello world</h1>
          </div>
        </Popover>
      ) : null}
    </>
  );
};

export default FulfillmentMangement;
