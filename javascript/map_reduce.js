const sections = [
    {
        title: 'Getting started',
        reset_lesson_position: false,
        lessons: [{ name: 'Welcome' }, { name: 'Installation' }]
    },

    {
        title: 'Basic operator',
        reset_lesson_position: false,
        lessons: [{ name: 'Addition / Subtraction' }, { name: 'Multiplication / Division' }]
    },

    {
        title: 'Advanced topics',
        reset_lesson_position: true,
        lessons: [{ name: 'Mutability' }, { name: 'Immutability' }]
    }
]

let innerPosition = 0

let formattedSections = sections.map((section, index) => {
	
	if (section.reset_lesson_position) {
		innerPosition = 0
	}

	return {
		...section,
		lessons: section.lessons.reduce((agg, curr) => {
			innerPosition += 1
			return [
				...agg,
				{
					...curr,
					position: innerPosition
				}
			]
		}, []),
		position: index + 1
	}
})

console.log(formattedSections)