
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SupportCaseData {
  ytdCreatedTickets: string;
  ytdSolvedTickets: string;
  ytdUnsolvedTickets: string;
  resolutionPercentage: string;
  satisfactionScore: string;
}

interface TicketReason {
  reason: string;
  createdTickets: string;
  percentageOfTotal: string;
}

interface CustomerServiceCardProps {
  supportCaseData: SupportCaseData;
  topTicketReasons: TicketReason[];
}

export function CustomerServiceCard({ supportCaseData, topTicketReasons }: CustomerServiceCardProps) {
  return (
    <div className="space-y-8">
      {/* Support Case Summary */}
      <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
        <CardHeader className="pb-6 border-b border-slate-100">
          <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold">
            Support Case
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-xs font-medium text-slate-600 tracking-wide mb-2">Created Tickets</div>
              <div className="text-2xl font-bold text-slate-900">{supportCaseData.ytdCreatedTickets}</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-slate-600 tracking-wide mb-2">Solved Tickets</div>
              <div className="text-2xl font-bold text-slate-900">{supportCaseData.ytdSolvedTickets}</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-slate-600 tracking-wide mb-2">Unsolved Tickets</div>
              <div className="text-2xl font-bold text-slate-900">{supportCaseData.ytdUnsolvedTickets}</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-slate-600 tracking-wide mb-2">Resolution %</div>
              <div className="text-2xl font-bold text-slate-900">{supportCaseData.resolutionPercentage}</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-slate-600 tracking-wide mb-2">Satisfaction Score</div>
              <div className="text-2xl font-bold text-slate-900">{supportCaseData.satisfactionScore}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top 10 Ticket Distribution by Reason */}
      <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
        <CardHeader className="pb-6 border-b border-slate-100">
          <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold">
            Top 10 Ticket Distribution by Reason
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left py-3 px-4 font-medium text-xs text-slate-600 tracking-wide">Reason</th>
                  <th className="text-center py-3 px-4 font-medium text-xs text-slate-600 tracking-wide">Created Tickets</th>
                  <th className="text-center py-3 px-4 font-medium text-xs text-slate-600 tracking-wide">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {topTicketReasons.map((ticket, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 text-sm font-medium text-slate-800">{ticket.reason}</td>
                    <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{ticket.createdTickets}</td>
                    <td className="py-3 px-4 text-sm font-mono tabular-nums text-center text-slate-800">{ticket.percentageOfTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
