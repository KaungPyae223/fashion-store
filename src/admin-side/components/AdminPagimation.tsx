"use client";
import useUpdateParams from "@/hooks/useUpdateParams";

const AdminPagination = ({ meta }) => {
  const updateParams = useUpdateParams();

  const totalPage = meta.last_page;

  const currentPage = meta.current_page;

  const UpdatePage = (page: number) => {
    updateParams({ page: page.toString() });
  };

  const PrevNext = (preOrNex: string) => {
    if (preOrNex === "prev" && currentPage > 1) {
      const newPage = currentPage - 1;
      updateParams({ page: newPage.toString() });
    } else if (preOrNex === "next" && currentPage < totalPage) {
      const newPage = currentPage + 1;
      updateParams({ page: newPage.toString() });
    }
  };

  const last = Math.min(currentPage + 2, totalPage);
  const start = Math.max(1, currentPage - 2);

  const lastPage =
    last > 5 && last <= totalPage
      ? last
      : currentPage > totalPage
      ? totalPage
      : 5 > totalPage
      ? totalPage
      : 5;

  // Handle the First page
  const startPage =
    start > totalPage - 4 && totalPage - 5 >= 1 ? totalPage - 4 : start;

  const Pages = Array.from(
    { length: lastPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const Button = ({ pageNo }: { pageNo: number }) => {
    return (
      <button
        type="button"
        onClick={() => UpdatePage(pageNo)}
        className={`${
          pageNo === currentPage
            ? "bg-gray-800 text-white"
            : "text-gray-800 hover:bg-gray-100"
        } min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 py-2 px-3 text-sm focus:outline-none  disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10`}
      >
        {pageNo}
      </button>
    );
  };

  return (
    totalPage > 1 && (
      <div className="mt-9  flex justify-center">
        <div
          className="flex items-center -space-x-px bg-white"
          aria-label="Pagination"
        >
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm  border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            aria-label="Previous"
            onClick={() => PrevNext("prev")}
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          {Pages.map((page) => (
            <Button key={page} pageNo={page} />
          ))}
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            aria-label="Next"
            onClick={() => PrevNext("next")}
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export default AdminPagination;
