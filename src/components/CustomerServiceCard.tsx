
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SupportCaseData {
  ytdCreatedTickets: string;
  ytdSolvedTickets: string;
  ytdUnsolvedTickets: string;
  resolutionPercentage: string;
  numberOfSurveys: string;
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

const B2BIcon = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="inline-flex items-center justify-center w-8 h-6 bg-orange-500 text-white text-xs font-bold rounded-md mr-3 cursor-help">
          WSL
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Wholesale Sales/B2B</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const B2CIcon = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="inline-flex items-center justify-center w-8 h-6 bg-pink-500 text-white text-xs font-bold rounded-md mr-3 cursor-help">
          RTL
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Retail Sales/B2C</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export function CustomerServiceCard({ 
  supportCaseDataB2B, 
  topTicketReasonsB2B,
  supportCaseDataB2C,
  topTicketReasonsB2C 
}: CustomerServiceCardProps) {
  const formatPercentage = (value: string) => {
    const numValue = parseFloat(value.replace('%', ''));
    return `${numValue.toFixed(1)}%`;
  };

  const renderSupportCaseCard = (title: string, data: SupportCaseData, IconComponent: React.ComponentType) => (
    <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
      <CardHeader className="pb-6 border-b border-slate-100">
        <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold flex items-center">
          <IconComponent />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="text-center flex flex-col">
            <div className="text-xs font-medium text-slate-600 tracking-wide mb-2 flex-1 flex items-start">Created Tickets</div>
            <div className="text-xs font-bold text-slate-900">{data.ytdCreatedTickets}</div>
          </div>
          <div className="text-center flex flex-col">
            <div className="text-xs font-medium text-slate-600 tracking-wide mb-2 flex-1 flex items-start">Solved Tickets</div>
            <div className="text-xs font-bold text-slate-900">{data.ytdSolvedTickets}</div>
          </div>
          <div className="text-center flex flex-col">
            <div className="text-xs font-medium text-slate-600 tracking-wide mb-2 flex-1 flex items-start">Unsolved Tickets</div>
            <div className="text-xs font-bold text-slate-900">{data.ytdUnsolvedTickets}</div>
          </div>
          <div className="text-center flex flex-col">
            <div className="text-xs font-medium text-slate-600 tracking-wide mb-2 flex-1 flex items-start">Resolution %</div>
            <div className="text-xs font-bold text-slate-900">{formatPercentage(data.resolutionPercentage)}</div>
          </div>
          <div className="text-center flex flex-col">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-xs font-medium text-slate-600 tracking-wide mb-2 flex-1 flex items-start cursor-help"># of Surveys</div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Excludes any ticket that was assigned as wrong support channel</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="text-xs font-bold text-slate-900">{data.numberOfSurveys}</div>
          </div>
          <div className="text-center flex flex-col">
            <div className="text-xs font-medium text-slate-600 tracking-wide mb-2 flex-1 flex items-start">Satisfaction Score</div>
            <div className="text-xs font-bold text-slate-900">{formatPercentage(data.satisfactionScore)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderTicketDistributionCard = (title: string, tickets: TicketReason[], IconComponent: React.ComponentType) => (
    <Card className="border-slate-200 bg-white hover:shadow-md overflow-hidden transition-all duration-200">
      <CardHeader className="pb-6 border-b border-slate-100">
        <CardTitle className="text-lg tracking-tight text-slate-900 font-semibold flex items-center">
          <IconComponent />
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
                  <td className="py-3 px-4 text-xs font-medium text-slate-800">{ticket.reason}</td>
                  <td className="py-3 px-4 text-xs font-mono tabular-nums text-center text-slate-800">{ticket.createdTickets}</td>
                  <td className="py-3 px-4 text-xs font-mono tabular-nums text-center text-slate-800">{ticket.percentageOfTotal}</td>
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
        {renderSupportCaseCard("Support Cases", supportCaseDataB2B, B2BIcon)}
        {renderTicketDistributionCard("Top 10 Ticket Distribution by Reason", topTicketReasonsB2B, B2BIcon)}
      </div>

      {/* B2C Column */}
      <div className="space-y-8">
        {renderSupportCaseCard("Support Cases", supportCaseDataB2C, B2CIcon)}
        {renderTicketDistributionCard("Top 10 Ticket Distribution by Reason", topTicketReasonsB2C, B2CIcon)}
      </div>
    </div>
  );
}
