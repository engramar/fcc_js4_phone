const Phone = require('./app')

describe('Phone', () => {

	it('should return true if input is "1 555-555-5555"', () => {
		// Given
		const input = '1 555-555-5555'
		const expected = true
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return true if input is "1 (555) 555-5555"', () => {
		// Given
		const input = '1 (555) 555-5555'
		const expected = true
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return true if input is "5555555555"', () => {
		// Given
		const input = '5555555555'
		const expected = true
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return true if input is "555-555-5555"', () => {
		// Given
		const input = '555-555-5555'
		const expected = true
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return true if input is "(555)555-5555"', () => {
		// Given
		const input = '(555)555-5555'
		const expected = true
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return true if input is "1(555)555-5555"', () => {
		// Given
		const input = '1(555)555-5555'
		const expected = true
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "555-5555"', () => {
		// Given
		const input = '555-5555'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "5555555"', () => {
		// Given
		const input = '5555555'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "1 555)555-5555"', () => {
		// Given
		const input = '1 555)555-5555'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return true if input is "1 555 555 5555"', () => {
		// Given
		const input = '1 555 555 5555'
		const expected = true
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return true if input is "1 456 789 4444"', () => {
		// Given
		const input = '1 456 789 4444'
		const expected = true
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "123**&!!asdf#"', () => {
		// Given
		const input = '123**&!!asdf#'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "55555555"', () => {
		// Given
		const input = '55555555'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "(6054756961)"', () => {
		// Given
		const input = '(6054756961)'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "2 (757) 622-7382"', () => {
		// Given
		const input = '2 (757) 622-7382'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "0 (757) 622-7382"', () => {
		// Given
		const input = '0 (757) 622-7382'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "-1 (757) 622-7382"', () => {
		// Given
		const input = '-1 (757) 622-7382'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "2 757 622-7382"', () => {
		// Given
		const input = '2 757 622-7382'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "10 (757) 622-7382"', () => {
		// Given
		const input = '10 (757) 622-7382'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "27576227382"', () => {
		// Given
		const input = '27576227382'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "(275)76227382"', () => {
		// Given
		const input = '(275)76227382'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});


	it('should return false if input is "2(757)6227382"', () => {
		// Given
		const input = '2(757)6227382'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "2(757)622-7382"', () => {
		// Given
		const input = '2(757)622-7382'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "555)-555-5555"', () => {
		// Given
		const input = '555)-555-5555'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "(555-555-5555"', () => {
		// Given
		const input = '(555-555-5555'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return false if input is "(555)5(55?)-5555"', () => {
		// Given
		const input = '(555)5(55?)-5555'
		const expected = false
		
		// When
		const result = Phone(input) 
		
		// Then
		expect(expected).toBe(result)
	});

});