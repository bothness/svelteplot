import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/svelte';
import AxisYTest from './axisY.test.svelte';

describe('AxisY mark', () => {
    it('default axis', () => {
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 300, y: { domain: [0, 100] } }
            }
        });

        const ticks = container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>;
        const tickValues = Array.from(ticks).map((t) => t.querySelector('text')?.textContent);
        expect(ticks.length).toBeGreaterThan(2);
        expect(tickValues).toStrictEqual(['0', '20', '40', '60', '80', '100']);
    });

    it('custom tick values via axis.data', () => {
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 300, y: { domain: [0, 100] } },
                axisArgs: { data: [0, 20, 80] }
            }
        });

        const ticks = container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>;
        const tickValues = Array.from(ticks).map((t) => t.querySelector('text')?.textContent);
        expect(ticks.length).toBe(3);
        expect(tickValues).toStrictEqual(['0', '20', '80']);
    });

    it('custom tick values via axis.ticks', () => {
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 300, y: { domain: [0, 100] } },
                axisArgs: { ticks: [0, 20, 80] }
            }
        });

        const ticks = container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>;
        const tickValues = Array.from(ticks).map((t) => t.querySelector('text')?.textContent);
        expect(ticks.length).toBe(3);
        expect(tickValues).toStrictEqual(['0', '20', '80']);
    });

    it('custom tick values via x scale ticks options', () => {
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 300, y: { domain: [0, 100], ticks: [0, 20, 80] } }
            }
        });

        const ticks = container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>;
        const tickValues = Array.from(ticks).map((t) => t.querySelector('text')?.textContent);
        expect(ticks.length).toBe(3);
        expect(tickValues).toStrictEqual(['0', '20', '80']);
    });

    it('tick count via axis.tickCount', () => {
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 300, y: { domain: [0, 100] } },
                axisArgs: { tickCount: 3 }
            }
        });

        const ticks = container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>;
        const tickValues = Array.from(ticks).map((t) => t.querySelector('text')?.textContent);
        expect(ticks.length).toBe(3);
        expect(tickValues).toStrictEqual(['0', '50', '100']);
    });

    it('tick count via axis.ticks', () => {
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 300, y: { domain: [0, 100] } },
                axisArgs: { ticks: 3 }
            }
        });

        const ticks = container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>;
        const tickValues = Array.from(ticks).map((t) => t.querySelector('text')?.textContent);
        expect(ticks.length).toBe(3);
        expect(tickValues).toStrictEqual(['0', '50', '100']);
    });

    it('tickSpacing', () => {
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 300, y: { domain: [0, 100] } },
                axisArgs: { tickSpacing: 200 }
            }
        });

        const ticks = container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>;
        const tickValues = Array.from(ticks).map((t) => t.querySelector('text')?.textContent);
        expect(ticks.length).toBe(3);
        expect(tickValues).toStrictEqual(['0', '50', '100']);
    });

    it('tickSpacing', () => {
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 300, y: { domain: [0, 100], tickSpacing: 200 } }
            }
        });

        const ticks = container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>;
        const tickValues = Array.from(ticks).map((t) => t.querySelector('text')?.textContent);
        expect(ticks.length).toBe(3);
        expect(tickValues).toStrictEqual(['0', '50', '100']);
    });

    it('tick interval via scale options', () => {
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 300, y: { domain: [0, 100], interval: 30 } }
            }
        });

        const ticks = container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>;
        const tickValues = Array.from(ticks).map((t) => t.querySelector('text')?.textContent);
        expect(tickValues).toStrictEqual(['0', '30', '60', '90']);
    });

    it('tick interval via axis options', () => {
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 300, y: { domain: [0, 100] } },
                axisArgs: { interval: 30 }
            }
        });

        const ticks = container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>;
        const tickValues = Array.from(ticks).map((t) => t.querySelector('text')?.textContent);
        expect(tickValues).toStrictEqual(['0', '30', '60', '90']);
    });

    it('passes index to accessor functions', () => {
        const checkIndex = vi.fn((d) => d);
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 250, y: { domain: [0, 100] } },
                axisArgs: {
                    tickFontSize: (d, i) => checkIndex(i) + 5
                }
            }
        });
        const ticks = Array.from(
            container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>
        );
        expect(ticks.length).toBe(6);
        expect(checkIndex.mock.calls[0]).toStrictEqual([0]);
        expect(checkIndex.mock.calls[1]).toStrictEqual([1]);
        const fontSizes = ticks.map((t) => t.querySelector('text')?.style.fontSize);
        expect(fontSizes).toStrictEqual(['5px', '6px', '7px', '8px', '9px', '10px']);
    });

    it('passes index to tickFormat functions', () => {
        const checkIndex = vi.fn((d) => String(d));
        const { container } = render(AxisYTest, {
            props: {
                plotArgs: { height: 250, y: { domain: [0, 100] } },
                axisArgs: {
                    tickFormat: (d, i) => checkIndex(i)
                }
            }
        });
        const ticks = Array.from(
            container.querySelectorAll('g.axis-y > g.tick') as NodeListOf<SVGGElement>
        );
        expect(ticks.length).toBe(6);
        expect(checkIndex.mock.calls[0]).toStrictEqual([0]);
        expect(checkIndex.mock.calls[1]).toStrictEqual([1]);
        const fontSizes = ticks.map((t) => t.querySelector('text')?.textContent);
        expect(fontSizes).toStrictEqual(['0', '1', '2', '3', '4', '5']);
    });
});
