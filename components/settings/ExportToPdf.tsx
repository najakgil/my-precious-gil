import { exportToPdf } from "@/lib/utils";

import { Button } from "../ui/button";

const ExportToPdf = () => (
  <div className="flex flex-col gap-3 px-5 py-3">
    <h3 className="text-[10px] uppercase">PDF 다운로드</h3>
    <Button
      variant="outline"
      className="w-full border border-primary-grey-100 hover:bg-[#2294FF] hover:text-primary-black"
      onClick={exportToPdf}
    >
      Export to PDF
    </Button>
  </div>
);

export default ExportToPdf;
