"use client";
import { useNavigate } from "/src/nextNavigation";
import { ICON_MAP } from "../utils/iconMapper";

export default function GenericDropdown({ data }) {
  const navigate = useNavigate();

  return (
    <div className="flex bg-white rounded-xl overflow-visible max-h-[420px]">

      {/* RIGHT SIDE ONLY (since left panel already handled outside in OurIndustries) */}
      <div className="flex-1 p-6">

        {/* GRID */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-12">

          {data?.map((item) => {
            const Icon = ICON_MAP[item.icon];

            return (
              <div
                key={item.name}
                onClick={() => navigate(item.route)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                {/* ICON */}
                <div className="text-bloo text-xl transition">
                  {Icon && <Icon />}
                </div>

                {/* TEXT */}
                <div className="text-md font-medium text-black group-hover:text-bloo transition duration-300">
                  {item.name}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}