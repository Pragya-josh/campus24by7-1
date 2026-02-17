import { 
  Zap, 
  Clock, 
  ShieldCheck, 
  BarChart3, 
  Smartphone, 
  Cloud 
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Reduces Workload",
    description: "Automate repetitive tasks and free up your staff for important work.",
  },
  {
    icon: Clock,
    title: "Saves Time",
    description: "Complete tasks in minutes that used to take hours or days.",
  },
  {
    icon: ShieldCheck,
    title: "Prevents Errors",
    description: "Eliminate manual data entry mistakes with smart automation.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Make data-driven decisions with instant reports and insights.",
  },
  {
    icon: Smartphone,
    title: "Works on Any Device",
    description: "Access your dashboard from desktop, tablet, or mobile phone.",
  },
  {
    icon: Cloud,
    title: "Cloud Secure",
    description: "Your data is encrypted and backed up on secure cloud servers.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transform How You{" "}
              <span className="gradient-text">Manage Your Institution</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of schools and colleges that have already made the switch to Campus24by7 and experience the difference.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "500+", label: "Institutions" },
                { value: "50K+", label: "Users" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
