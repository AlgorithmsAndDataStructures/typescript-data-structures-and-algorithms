const rooms = [1, 2, 3,5,6,7,8,9,10, 11,12,13,14,15,16,17];
const individuals = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

let individaulMaps: Map<string, number[]> = new Map();
let nextAssignment = 0;
let assignedRooms = [];
let completelyAssigned = [];

export function assignRooms() {
  const roomAssignments: { [week: string]: Map<string, number[]> } = {};
  let week = 0;
  while (week < 10) {
    const currentWeek = `Week${week}`;
    roomAssignments[currentWeek] = new Map();
    assignedRooms = [];
    if (completelyAssigned.length === individuals.length) {
      individaulMaps = new Map();
      completelyAssigned = [];
    }
    while (assignedRooms.length !== rooms.length && completelyAssigned.length !== individuals.length) {
      for (let i = 0; i < individuals.length; i++) {
        const currentIndex = (i + nextAssignment) % individuals.length;
        if (completelyAssigned.includes(individuals[currentIndex])) {
          continue;
        }
        const currentMapped = individaulMaps.has(individuals[currentIndex]) ? individaulMaps.get(individuals[currentIndex]) : [];

        const unmappedRoom = rooms.find(room => !assignedRooms.includes(room) && !currentMapped.includes(room));
        if (unmappedRoom) {
          // Assign room by week
          const assignment = roomAssignments[currentWeek].has(individuals[currentIndex]) ? roomAssignments[currentWeek].get(individuals[currentIndex]) : [];
          assignment.push(unmappedRoom);
          roomAssignments[currentWeek].set(individuals[currentIndex], assignment);
          // Add to rooms assigned to individual
          currentMapped.push(unmappedRoom);
          individaulMaps.set(individuals[currentIndex], currentMapped);
          assignedRooms.push(unmappedRoom);
          if (currentMapped.length === rooms.length) {
            completelyAssigned.push(individuals[currentIndex]);
          }
          if (completelyAssigned.length === individuals.length || assignedRooms.length === rooms.length) {
            nextAssignment = (1 + currentIndex) % individuals.length;
          }
        }
      }
    }
    week += 1;
  }
  console.log(roomAssignments);
}
