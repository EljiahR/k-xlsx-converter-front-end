import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { beforeEach } from 'node:test';
import renderWithStore from './renderWithStore';
import ReportPage from "../src/app/dashboard/(editor)/report/page"


describe("ReportPage", () => {    
    it("renders", () => {
        renderWithStore(<ReportPage />);
        expect(screen.getByText(/go back/i)).toBeInTheDocument();
    });
});