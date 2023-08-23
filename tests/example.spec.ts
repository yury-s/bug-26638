import { test, expect } from '@playwright/test';

test('soft assertions demo', async ({ }) => {
    const ER = 'X'
    expect.soft(ER).toBe('Y')
    expect.soft(ER).toBe('Z')
});