

import { exportToPng } from "@/lib/utils";
import { Button } from "../ui/button";

const ExportToPnG = () => (
  <div className="flex flex-col gap-3 px-5 py-3">
    <h3 className="text-[10px] uppercase">이미지 다운로드</h3>
    <Button
      variant="outline"
      className="w-full border border-primary-grey-100 hover:bg-[#2294FF] hover:text-primary-black"
      onClick={exportToPng}
    >
      Export to PNG
    </Button>
  </div>
);

export default ExportToPnG;
