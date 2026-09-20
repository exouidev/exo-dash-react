import * as React from "react"
import { cn } from "../../lib/utils"

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  isLoading?: boolean;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, isLoading, children, ...props }, ref) => {
    
    // Automatically inject loading state to TableBody
    const content = React.Children.map(children, child => {
      if (React.isValidElement(child) && (child.type as any).displayName === 'TableBody') {
        return React.cloneElement(child as any, { isLoading });
      }
      return child;
    });

    return (
      <div className="relative w-full overflow-auto">
        <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props}>
          {content}
        </table>
      </div>
    )
  }
)
Table.displayName = "Table"

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
  )
)
TableHeader.displayName = "TableHeader"

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  isLoading?: boolean;
}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, isLoading, children, ...props }, ref) => {
    
    if (isLoading) {
      return (
        <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props}>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i} className="border-b transition-colors hover:bg-muted/50">
              <td colSpan={100} className="p-4 align-middle">
                 <div className="h-6 w-full animate-pulse rounded-md bg-muted/60" />
              </td>
            </tr>
          ))}
        </tbody>
      );
    }

    return (
      <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props}>
        {children}
      </tbody>
    )
  }
)
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn("bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
  )
)
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)} {...props} />
  )
)
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th ref={ref} className={cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)} {...props} />
  )
)
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)} {...props} />
  )
)
TableCell.displayName = "TableCell"

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell }
