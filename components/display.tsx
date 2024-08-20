import { useIUI } from "./context";

export type SummaryComponentProps = {
  text: string;
};

export type BioComponentProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export type InsightComponentProps = {
  text: string;
};

export const SummaryComponent = ({ text = "" }: SummaryComponentProps) => {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-gray-600 uppercase">
        {" "}
        💪 Summary
      </h2>
      <p className="mt-2">{text}</p>
    </div>
  );
};

export const BioComponent = ({
  name = "",
  bio = "",
  imageUrl = "",
}: BioComponentProps) => {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-gray-600 uppercase mb-2">
        👤 Bio
      </h2>
      <h3 className="text-xl mb-1">{name}</h3>
      <div className="clearfix space-x-4">
        {imageUrl ? (
          <img
            src={`${imageUrl}`}
            alt={`Image of ${name}`}
            className="float-right ml-2 mb-2 w-1/3 max-w-xs object-cover"
          />
        ) : null}
        <p className="!ml-0 ">{bio}</p>
      </div>
    </div>
  );
};

export const InsightComponent = ({ text = "" }: InsightComponentProps) => {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-gray-600 uppercase mb-2">
        💡 Insight
      </h2>
      <p className="mt-2">{text}</p>
    </div>
  );
};

export const LoadingIndicator = () => {
  const { loading } = useIUI();

  if (!loading) return null;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
    </div>
  );
};
