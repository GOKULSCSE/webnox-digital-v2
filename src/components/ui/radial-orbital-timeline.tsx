"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

export interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
  centerLabel?: string;
  centerContent?: React.ReactNode;
}

export function RadialOrbitalTimeline({
  timelineData,
  className,
  centerLabel = "AI",
  centerContent,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [radius, setRadius] = useState<number>(195);
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width < 420) {
          setRadius(135);
        } else if (width < 640) {
          setRadius(160);
        } else if (width < 960) {
          setRadius(180);
        } else {
          setRadius(195);
        }
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.45,
      Math.min(1, 0.45 + 0.55 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-[#FF7230] border-[#FF7230]";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className={cn(
        "w-full min-h-[580px] lg:h-[680px] flex flex-col items-center justify-center bg-[#070503] text-white overflow-hidden relative select-none",
        className
      )}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Subtle ambient orbital background glow synced to Webnox theme */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FF7230]/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Central AI glowing energy core with signature Webnox gradient */}
          <div
            className="absolute w-16 h-16 rounded-full animate-pulse flex items-center justify-center z-10 shadow-[0_0_40px_rgba(255,114,48,0.5)]"
            style={{
              background:
                "linear-gradient(135deg, #FF7230 0%, #FF8935 50%, #FF532B 100%)",
            }}
          >
            <div className="absolute w-20 h-20 rounded-full border border-[#FF7230]/40 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md p-1.5 overflow-hidden">
              {centerContent ? (
                centerContent
              ) : (
                <span className="text-[10px] font-black text-[#FF7230]">
                  {centerLabel}
                </span>
              )}
            </div>
          </div>

          {/* Dynamic Concentric orbital rings */}
          <div
            className="absolute rounded-full border border-white/10 pointer-events-none transition-all duration-300"
            style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
          ></div>
          <div
            className="absolute rounded-full border border-dashed border-white/5 pointer-events-none transition-all duration-300"
            style={{ width: `${radius * 1.55}px`, height: `${radius * 1.55}px` }}
          ></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon as React.ComponentType<{
              size?: number;
              className?: string;
            }>;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Node Energy Halo */}
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,114,48,0.3) 0%, rgba(255,114,48,0) 70%)`,
                    width: `${item.energy * 0.5 + 44}px`,
                    height: `${item.energy * 0.5 + 44}px`,
                    left: `-${(item.energy * 0.5 + 44 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 44 - 40) / 2}px`,
                  }}
                ></div>

                {/* Node Icon Circle */}
                <div
                  className={`
                  w-11 h-11 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-[#FF7230] text-white shadow-lg shadow-orange-950/50"
                      : isRelated
                      ? "bg-[#FF7230]/40 text-white"
                      : "bg-[#140e0a] text-white"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-white shadow-lg shadow-white/30"
                      : isRelated
                      ? "border-[#FF7230] animate-pulse"
                      : "border-white/30 hover:border-white/70"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125" : "hover:scale-110"}
                `}
                >
                  <Icon size={18} />
                </div>

                {/* Node Label Below */}
                <div
                  className={`
                  absolute top-13 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs font-semibold tracking-wider text-center
                  transition-all duration-300 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                  ${isExpanded ? "text-white scale-110 font-bold" : "text-white/80"}
                `}
                >
                  {item.title}
                </div>

                {/* Expanded Card Details */}
                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-72 sm:w-80 bg-[#120c08]/95 backdrop-blur-xl border-white/20 shadow-2xl shadow-orange-950/40 overflow-visible text-white z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[#FF7230]/70"></div>
                    <CardHeader className="pb-2.5">
                      <div className="flex justify-between items-center gap-2">
                        <Badge
                          className={`px-2.5 py-0.5 text-[11px] font-bold ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "ACTIVE DEPLOYMENT"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span className="text-[11px] font-mono text-[#FF7230] font-semibold">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-base font-bold text-white mt-2 tracking-tight">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-neutral-300 leading-relaxed">
                      <p>{item.content}</p>

                      {/* Energy Metric Bar */}
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center text-xs mb-1.5">
                          <span className="flex items-center text-neutral-300">
                            <Zap size={11} className="mr-1 text-[#FF7230]" />
                            Adoption Impact
                          </span>
                          <span className="font-mono text-[#FF7230] font-bold">
                            {item.energy}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${item.energy}%`,
                              background:
                                "linear-gradient(90deg, #FF7230, #FF8935, #FF532B)",
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Connected Nodes */}
                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2">
                            <Link size={11} className="text-[#FF7230] mr-1.5" />
                            <h4 className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
                              Connected Ecosystem
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2.5 py-0 text-[11px] rounded-full border-white/20 bg-white/5 hover:bg-[#FF7230]/20 hover:border-[#FF7230] text-neutral-200 hover:text-white transition-all cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={10}
                                    className="ml-1 text-[#FF7230]"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RadialOrbitalTimeline;
