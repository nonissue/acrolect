import { getLayout } from 'src/layouts/Layout';

const Contact = () => {
  return (
    <section className="text-base font-normal leading-relaxed text-slate-800 dark:text-slate-300">
      <div className="">
        <h5 className="mb-8 text-4xl font-black tracking-tight text-slate-700 dark:text-slate-200 sm:mb-12 sm:text-5xl">
          Documentation
        </h5>
        <p>
          Coming soonnn Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Turpis.
        </p>

        <br />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas pretium aenean pharetra. Orci eu lobortis elementum nibh
          tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra
          vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
          tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
          duis convallis convallis tellus. Urna molestie at elementum eu. Nunc
          sed blandit libero volutpat.
        </p>

        <br />
      </div>
    </section>
  );
};

Contact.getLayout = getLayout;

export default Contact;
