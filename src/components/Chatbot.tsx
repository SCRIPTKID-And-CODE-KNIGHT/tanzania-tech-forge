import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageCircle, 
  X, 
  Send, 
  Phone, 
  Mail, 
  MessageSquare,
  Bot,
  User
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Tanzania Tech Forge's AI assistant. I'm here to help you learn about our services and how to contact us. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    greeting: [
      "Hello! Welcome to Tanzania Tech Forge. I'm here to help you with information about our services and how to contact us.",
      "Hi there! I'm your virtual assistant from Tanzania Tech Forge. What would you like to know about our technology solutions?",
      "Welcome! I'm here to assist you with questions about our services, pricing, or how to get in touch with our team."
    ],
    services: [
      "Tanzania Tech Forge offers:\n• Web & App Development\n• IT Consultancy\n• Cybersecurity Training\n• Tech Workshops & Bootcamps\n• AI & Data Science Solutions\n\nWhich service interests you most?"
    ],
    contact: [
      "You can reach Tanzania Tech Forge through:\n📞 Phone/WhatsApp: +255 756 377 013\n📧 Email: technociphernet@gmail.com\n🌐 Visit our Contact page to book a service\n\nWould you like me to help you connect right now?"
    ],
    pricing: [
      "Our pricing varies by service. For accurate quotes:\n• Use our booking form on the Contact page\n• Call/WhatsApp us at +255 756 377 013\n• Email us at technociphernet@gmail.com\n\nWe offer competitive rates and custom solutions!"
    ],
    location: [
      "Tanzania Tech Forge is based in Tanzania. We serve clients locally and internationally. Our next big event is our official launch on December 31, 2025 in Geita!\n\nWant to know more about our services or how to get in touch?"
    ],
    projects: [
      "We've worked on exciting projects including:\n• AI & Machine Learning solutions\n• Cybersecurity implementations\n• Hardware & IoT projects (Arduino, Raspberry Pi)\n• Web & Mobile applications\n• Our featured Bacteria Detection System\n\nInterested in starting a project with us?"
    ]
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
    }
    
    if (message.includes('service') || message.includes('what do you do') || message.includes('offerings')) {
      return predefinedResponses.services[0];
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return predefinedResponses.contact[0];
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing') || message.includes('quote')) {
      return predefinedResponses.pricing[0];
    }
    
    if (message.includes('location') || message.includes('where') || message.includes('address')) {
      return predefinedResponses.location[0];
    }
    
    if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
      return predefinedResponses.projects[0];
    }
    
    if (message.includes('whatsapp')) {
      return "I can help you connect via WhatsApp! Click this link: https://wa.me/255756377013 or call +255 756 377 013 directly. Our team will be happy to assist you!";
    }
    
    if (message.includes('launch') || message.includes('event')) {
      return "We're excited about our official launch on December 31, 2025 in Geita! It's free and open to all. Check our Events page for more details and to register.";
    }
    
    // Default response
    return "I'd be happy to help! I can provide information about:\n• Our services and solutions\n• Contact information\n• Pricing and quotes\n• Our projects and portfolio\n• How to book our services\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Our Services", action: () => setInputMessage("What services do you offer?") },
    { text: "Contact Info", action: () => setInputMessage("How can I contact you?") },
    { text: "Pricing", action: () => setInputMessage("What are your prices?") },
    { text: "WhatsApp", action: () => window.open("https://wa.me/255756377013", "_blank") }
  ];

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 z-50 bg-gradient-primary hover:scale-110"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-elegant z-50 border-0 bg-background/95 backdrop-blur-sm">
          <CardHeader className="pb-3 bg-gradient-primary text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <CardTitle className="text-sm">Tanzania Tech Forge Assistant</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-gradient-primary text-white'
                          : 'bg-muted'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-accent" />}
                        {message.sender === 'user' && <User className="h-4 w-4 mt-0.5" />}
                        <div className="text-sm whitespace-pre-line">{message.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-accent" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Quick Actions */}
            <div className="p-2 border-t">
              <div className="grid grid-cols-2 gap-1 mb-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={action.action}
                    className="text-xs h-8"
                  >
                    {action.text}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t bg-background/50">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  size="icon"
                  className="h-9 w-9"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;