export enum Report {
    DietNonCompliance = 0,
    TreatmentNonCompliance,
    Symptoms,
    RiskyEvents,
    DailySummary,
    WeeklySummary
};

export enum RiskyEvent {
    Biopsy = 0,
    MinorSurgery,
    MajorSurgery,
    Dentist,
    DiagnosticProcedure,
    Hospitalization
};

export enum Symptom {
    Palpitation = 0, 
    ChestPain, 
    Dyspnea, 
    Fatigue, 
    Lightheadedness
};

export enum Nutrient {
    Broccoli = 0,
    Endive,
    Spinach,
    Sprouts
};

export enum Treatment {
    Anticoagulant = 0,
    RateControl,
    RhythmControl
};

export enum BehaviorChange {
    ProsOfEngagement = 0,
    BarriersToEngagement,
    SelfReevaluation
};