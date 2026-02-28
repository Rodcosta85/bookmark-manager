export const formatBookmarkDates = (createdAt: string, lastVisited: string) => {
    // Your exact same logic
    const jsonDates = [createdAt, lastVisited];
    const newDates = jsonDates.map((d) => {
        // Adding a quick check just in case a date is missing
        if (!d) return "No date has been added"; 
        
        return new Date(d).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short'
        });
    });

    return newDates; 
};