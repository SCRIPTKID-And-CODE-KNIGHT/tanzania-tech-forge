import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Trophy,
  GraduationCap,
  Coffee,
  ExternalLink,
  Bell
} from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Tanzania Tech Forge Official Launch",
      description: "Join us for the grand opening of Tanzania Tech Forge! Experience our cutting-edge technology solutions, meet our expert team, and discover how we're innovating technology for Tanzania's future.",
      date: "December 31, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Geita, Tanzania",
      category: "Launch Event",
      attendees: "Open to all",
      price: "Free",
      icon: <Trophy className="w-6 h-6" />,
      status: "Registration Open"
    }
  ];

  const pastEvents = [
    {
      title: "Web Development Bootcamp 2023",
      description: "Intensive 5-day bootcamp covering modern web development technologies.",
      date: "December 2023",
      attendees: "45 participants",
      outcome: "35 participants got job placements"
    },
    {
      title: "Data Science Workshop Series",
      description: "6-week workshop series on data analysis and visualization.",
      date: "November 2023",
      attendees: "60 participants",
      outcome: "20 participants started data science careers"
    },
    {
      title: "IoT Innovation Challenge",
      description: "Competition for innovative IoT solutions for agriculture.",
      date: "October 2023",
      attendees: "25 teams",
      outcome: "5 winning projects got funding"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto text-white">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Events & Workshops
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Learn, Network &
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent"> Innovate</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Join our technology events, workshops, and competitions to stay ahead of the curve 
              and connect with Tanzania's thriving tech community.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Register for Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on these exciting learning and networking opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-primary rounded-xl text-white">
                        {event.icon}
                      </div>
                      <div>
                        <Badge variant="secondary">{event.category}</Badge>
                        <Badge 
                          variant={event.status === 'Registration Open' ? 'default' : 'outline'} 
                          className="ml-2"
                        >
                          {event.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-4">{event.title}</CardTitle>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-accent" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-accent" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-accent" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-accent" />
                      {event.attendees}
                    </div>
                  </div>

                  <div className="bg-accent/10 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">Price:</span>
                      <span className="text-lg font-bold text-accent">{event.price}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="default" className="flex-1" asChild>
                      <Link to="/contact">
                        Register Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline">
                      <Bell className="w-4 h-4 mr-2" />
                      Remind Me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Types of Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We organize various types of events to cater to different learning styles and career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <CardTitle>Workshops & Bootcamps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Intensive, hands-on learning experiences covering the latest technologies 
                  and industry best practices.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Programming Languages</li>
                  <li>• Web & Mobile Development</li>
                  <li>• Data Science & AI</li>
                  <li>• Cybersecurity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <Trophy className="w-8 h-8" />
                </div>
                <CardTitle>Competitions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Competitive events that challenge participants to solve real-world problems 
                  with innovative technology solutions.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Startup Pitch Competitions</li>
                  <li>• Hackathons</li>
                  <li>• Innovation Challenges</li>
                  <li>• Coding Contests</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <Coffee className="w-8 h-8" />
                </div>
                <CardTitle>Community Meetups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Casual networking events where tech professionals share knowledge, 
                  experiences, and build connections.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tech Talks</li>
                  <li>• Industry Panels</li>
                  <li>• Networking Sessions</li>
                  <li>• Demo Days</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Past Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the impact of our previous events and their success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                  <Badge variant="outline" className="w-fit">{event.date}</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    <strong>Attendees:</strong> {event.attendees}
                  </div>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <div className="text-sm">
                      <strong className="text-accent">Outcome:</strong>
                      <br />
                      {event.outcome}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Join Our Tech Community</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay updated with our latest events and be part of Tanzania's growing tech ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Register for Events</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="mailto:technociphernet@gmail.com">
                  Get Event Updates
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;