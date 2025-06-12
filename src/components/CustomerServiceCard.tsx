
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
  supportCaseDataB2B: SupportCaseData;
  topTicketReasonsB2B: TicketReason[];
  supportCaseDataB2C: SupportCaseData;
  topTicketReasonsB2C: TicketReason[];
}

export function CustomerServiceCard({ 
  supportCaseDataB2B, 
  topTicketReasonsB2B,
  supportCaseDataB2C,
  topTicketReasonsB2C 
}: CustomerServiceCardProps) {
  const renderSupportCaseCard = (title: string, data: SupportCaseData) => (
    <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
      <CardHeader className="pb-6 border-b border-slate-100">
        <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-5 gap-6">
          <div className="text-center flex flex-col">
            <div className="text-xs font-medium text-slate-600 tracking-wide mb-2 flex-1 flex items-start">Created Tickets</div>
            <div className="text-2xl font-bold text-slate-900">{data.ytdCreatedTickets}</div>
          </div>
          <div className="text-center flex flex-col">
            <div className="text-xs font-medium text-slate-600 tracking-wide mb-2 flex-1 flex items-start">Solved Tickets</div>
            <div className="text-2xl font-bold text-slate-900">{data.ytdSolvedTickets}</div>
          </div>
          <div className="text-center flex flex-col">
            <div className="text-xs font-medium text-slate-600 tracking-wide mb-2 flex-1 flex items-start">Unsolved Tickets</div>
            <div className="text-2xl font-bold text-slate-900">{data.ytdUnsolvedTickets}</div>
          </div>
          <div className="text-center flex flex-col">
            <div className="text-xs font-medium text-slate-600 tracking-wide mb-2 flex-1 flex items-start">Resolution %</div>
            <div className="text-2xl font-bold text-slate-900">{data.resolutionPercentage}</div>
          </div>
          <div className="text-center flex flex-col">
            <div className="text-xs font-medium text-slate-600 tracking-wide mb-2 flex-1 flex items-start">Satisfaction Score</div>
            <div className="text-2xl font-bold text-slate-900">{data.satisfactionScore}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderTicketDistributionCard = (title: string, tickets: TicketReason[]) => (
    <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
      <CardHeader className="pb-6 border-b border-slate-100">
        <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold">
          {title}
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
              {tickets.map((ticket, index) => (
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
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* B2B Column */}
      <div className="space-y-8">
        {renderSupportCaseCard("Support Cases (B2B)", supportCaseDataB2B)}
        {renderTicketDistributionCard("Top 10 Ticket Distribution by Reason (B2B)", topTicketReasonsB2B)}
      </div>

      {/* B2C Column */}
      <div className="space-y-8">
        {renderSupportCaseCard("Support Cases (B2C)", supportCaseDataB2C)}
        {renderTicketDistributionCard("Top 10 Ticket Distribution by Reason (B2C)", topTicketReasonsB2C)}
      </div>
    </div>
  );
}
